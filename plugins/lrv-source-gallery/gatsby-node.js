const { createRemoteFileNode } = require('gatsby-source-filesystem');
const axios = require('axios');

const API_URL = 'http://127.0.0.1:8000/api/gallery_items';
const IMG_BASE_PATH = `http://127.0.0.1:8000/gallery`;

exports.sourceNodes = async ({ actions, store, cache, createNodeId }) => {
  const { createNode, createNodeField } = actions;
  const { data } = await axios.get(API_URL);

  for (const item of data['hydra:member']) {
    let fileNode;

    if (item.name) {
      try {
        fileNode = await createRemoteFileNode({
          url: `${IMG_BASE_PATH}/${item.image}`,
          cache,
          store,
          createNode,
          createNodeId,
        });

        await createNodeField({
          node: fileNode,
          name: 'originalName',
          value: item.image,
        });

        await createNodeField({
          node: fileNode,
          name: 'name',
          value: item.name,
        });

        await createNodeField({
          node: fileNode,
          name: 'showInGallery',
          value: item.showOnline,
        });
      } catch (error) {}
    }
  }
};
