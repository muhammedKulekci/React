import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const NewsDetail = ({ categories, article, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{article.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="title"
        label="title"
        value={article.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="category_Id"
        label="Category"
        value={article.category_Id || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.name,
        }))}
        onChange={onChange}
        error={errors.category_Id}
      />

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={article.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="image"
        label="image"
        value={article.imgae}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default NewsDetail;
