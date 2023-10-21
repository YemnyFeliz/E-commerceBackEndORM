const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }],
    });

    res.json(allCategories);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!oneCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(oneCategory);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category

  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);

  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try {
    const putCategory = await Category.update({
      where: {
        id: req.params.id
      },
    });

    if (!putCategory){
      res.status(404).json({ message: 'No category found'});
      return;
    }

    res.status(200).json(putCategory);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value

  try {
    const delCategory = await Category.destroy({
      where: {
        id: req.params.id
      },
    });
    if (!delCategory){
      res.status(404).json({ message: 'no category id found'});
      return;
    }
    
    res.status(200).json(delCategory);

  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = router;
