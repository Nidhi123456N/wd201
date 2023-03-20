/* eslint-disable no-undef */
const db = require("../models");

describe("Todo test suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });
  test("Should list overdues", async () => {
    await db.Todo.addTask({
      title: "Test item",
      dueDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      completed: false,
    });
    const todoList = await db.Todo.overdue();
    expect(todoList.length).toBe(1);
  });
  test("Should list dueToday", async () => {
    await db.Todo.addTask({
      title: "Test item",
      dueDate: new Date(new Date().setDate(new Date().getDate())),
      completed: false,
    });
    const todoList = await db.Todo.dueToday();
    expect(todoList.length).toBe(1);
  });
  test("Should list dueLater", async () => {
    await db.Todo.addTask({
      title: "Test item",
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      completed: false,
    });
    const todoList = await db.Todo.dueLater();
    expect(todoList.length).toBe(1);
  });
  test("Should Mark as Complete", async () => {
    await db.Todo.addTask({
      title: "Test item",
      dueDate: new Date(new Date().setDate(new Date().getDate())),
      completed: false,
    });
    await db.Todo.markAsComplete(4);
    const listItem = await db.Todo.findOne({
      where: {
        id: 4,
      },
    });
    expect(listItem.completed).toBe(true);
  });
});
