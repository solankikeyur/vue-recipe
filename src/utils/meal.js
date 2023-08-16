import axiosClient from "../utils/axiosClient";

export const getRandomMeals = async () => {
    const { data } = await axiosClient.get("random.php");
    return data;
}

export const getMealById = async (id) => {
    const {data} = await axiosClient.get(`lookup.php?i=${id}`);
    return data;
}

export const getMealsByName = async (name) => {
    const {data} = await axiosClient.get(`search.php?s=${name}`);
    return data;
}