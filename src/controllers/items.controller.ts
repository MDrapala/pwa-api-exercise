import Database from "../models";

const Items = Database.items;
const Op = Database.Sequelize.Op;

export const createItems = (req: any, res: any) => {
  const { describe } = req.body;
  //!empty value
  if (!describe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Items.create({ ...req.body })
    .then((data: any) => {
      res.send(data);
    })
    .catch((error: any) => {
      res.status(500).send({
        message: error.message || "Some error occured while creating the items",
      });
    });
};

export const findAllItems = async (req: any, res: any) => {
  return Items.findAll()
    .then((data: any) => {
      return res.send(data);
    })
    .catch((error: any) => {
      return res.status(500).send({
        message:
          error.message || "Some error occured while retrieving articles",
      });
    });
};

export const updateItems = (req: any, res: any) => {
  const { id } = req.params;
  Items.update(req.body, {
    where: { id: id },
  })
    .then((num: number) => {
      if (num == 1) {
        res.send({
          message: "article was updated successfully.",
        });
      } else {
        res.send({
          message:
            "Cannot update article with id=${id}. Maybe article was not found or req.body is empty!",
        });
      }
    })
    .catch((error: any) => {
      res.status(500).send({
        message: "Error updating article with id=" + id,
      });
    });
};

export const deleteItems = (req: any, res: any) => {
  const { id } = req.params;
  Items.destroy({
    where: { id },
  })
    .then((num: any) => {
      console.log(id, num);
      if (num === 1) {
        res.send({
          message: "items was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete items with id=${id}. Maybe items was not found!`,
        });
      }
    })
    .catch((error: any) => {
      res.status(500).send({
        message: "Could not delete article with id=" + id,
      });
    });
};
