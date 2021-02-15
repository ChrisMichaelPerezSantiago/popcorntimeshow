import { nSQL } from "@nano-sql/core";
import { ref } from "@vue/composition-api";

const byId = (tName, id) =>{
  const data = ref([]);  
  nSQL().useDatabase("popcorntimedb");
    nSQL(`${tName}`);
    nSQL()
      .query("select")
      .where(["ID", "=", id])
      .exec()
      .then(rows => {
        data.value.push(rows);
      });
  
  return {
    data: data
  };
};

export default byId;