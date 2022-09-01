import { supabase } from "../../supabaseClient";

const getProducts = async () => {
  const { data, error } = await supabase.from("Product").select("*");

  return data;
};

const createProduct = async (payload) => {
  const { data, error } = await supabase.from("Product").insert([payload]);
};

const updateProduct = async (id, payload) => {
  const { data, error } = await supabase
    .from("Product")
    .update(payload)
    .match({ id: id });
};

const deleteProduct = async (id) => {
  const { data, error } = await supabase
    .from("Product")
    .delete()
    .match({ id: id });
};

export { getProducts, createProduct, updateProduct, deleteProduct };
