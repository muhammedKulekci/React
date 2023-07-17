import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const NewsDetail = ({ categories, article, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{article.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="title"
        label="Başlık"
        value={article.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="desc"
        label="Açıklama"
        value={article.desc}
        onChange={onChange}
        error={errors.desc}
      />
      <TextInput
        name="image"
        label="Görsel"
        value={article.imgae}
        onChange={onChange}
        error={errors.imgae}
      />

      <SelectInput
        name="category_Id"
        label="Kategori"
        value={article.category_Id || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.name,
        }))}
        onChange={onChange}
        error={errors.category_Id}
      />
      <br />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default NewsDetail;
