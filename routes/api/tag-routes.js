const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const getTagData = await Tag.findAll({ include: [{ model: Product }]});
    return res.status(200).json(getTagData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const getTagByID = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!getTagByID) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    return res.status(200).json(getTagByID);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const createNewTag = await Tag.create(req.body);
    return res.status(200).json(createNewTag);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateTagData[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    return res.status(200).json(updateTagData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    return res.status(200).json({ message:`Tag with the ${req.params.id} ID has been deleted!` });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
