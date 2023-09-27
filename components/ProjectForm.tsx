"use client";

import { SessionInterface } from "@/common.types";
import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";
import { ChangeEvent, useState } from "react";

type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    siteUrl: "",
    githubUrl: "",
    category: "",
  });
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) return alert("Please upload an image");

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const res = reader.result as string;

      handleStateChange("image", res);
    };
  };
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prev) => ({ ...prev, [fieldName]: value }));
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && "Choose a poster for your project"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === "create" ? true : false}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            alt="poster"
            fill
            className="sm:p-10 object-contain z-20"
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Project title"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Description"
        isTextArea
        state={form.description}
        placeholder="Project Description"
        setState={(value) => handleStateChange("description", value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.siteUrl}
        placeholder="https://example.com"
        setState={(value) => handleStateChange("siteUrl", value)}
      />
      <FormField
        type="url"
        title="Github URL"
        state={form.githubUrl}
        placeholder="https://github.com/shubhamxdd/xyzproj"
        setState={(value) => handleStateChange("githubUrl", value)}
      />

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flexStart w-full">
        <button>Create</button>
      </div>
    </form>
  );
};

export default ProjectForm;
