const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.4490881",
    lng: "-46.5449671",
    name: "Lar dos meninos",
    about:
      "Presta assistencia a crianças de 06 a 15 anos que se encontre em situaçao de risco e/ou vulnerabilidade",
    whatsapp: "8754345349855",
    images: [
      " https://images.unsplash.com/photo-1600872164153-b2a465b7d946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjI2MjAxMTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",

      "https://images.unsplash.com/photo-1599577180758-69c952d78d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjI2MjAxMjQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
    opening_hours: "Horario de visitas das 8h até as 16h",
    open_on_weekends: "0",
  });

  // *consultar dados na tabela*

  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

   // *consultar somente 1 orphanato, pelo id*

  const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '2'");
  console.log(orphanage)

  // *deletar um dado na tabela*
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
