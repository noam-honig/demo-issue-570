import express from "express";
import { Entity, Fields, JsonDataProvider, remult, Remult } from "remult";
import { remultExpress } from "remult/remult-express";
import { JsonEntityFileStorage } from "remult/server";

const app = express();

@Entity("Task", {
  allowApiCrud: true,
  saved: async (task, e) => {
    await remult.repo(Task).deleteMany({ where: { id: undefined } });
  },
})
class Task {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  title!: string;
}

export const api = remultExpress({
  entities: [Task],
  dataProvider: async () =>
    new JsonDataProvider(new JsonEntityFileStorage("./db")),
  initApi: async (remult: Remult) => {
    await remult.repo(Task).insert({ title: "New Task" });

    const deleted = await remult.repo(Task).deleteMany({
      where: { title: undefined },
    });
    console.log("Deleted tasks: ", deleted); // result: "Deleted tasks: 1"
  },
});

app.use(api);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
