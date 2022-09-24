export const ItemsModel = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "task",
    {
      describe: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
