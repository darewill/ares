import React from "react";

export const Form = () => {
  const [formData, setData] = React.useState({
    title: "",
    description: "",
    date: "",
  });
  
  return (
    <section>
      <div className="field">
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setData({
              ...formData,
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="field">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={6}
          value={formData.description}
          onChange={(e) =>
            setData({
              ...formData,
              description: e.target.value,
            })
          }
        ></textarea>
      </div>
      <div className="field">
        <label for="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={(e) =>
            setData({
              ...formData,
              date: e.target.value,
            })
          }
        />
      </div>
      <div className="field">
        <button className="submit" onClick={() => console.log(formData)}>Add task</button>
      </div>
    </section>
  );
};
