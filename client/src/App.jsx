import React, { useEffect, useState } from "react";
import { Datepicker, Select, Textarea, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = { ...data, date };

    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const result = await res.json();
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const defaultDate = new Date();
    setDate(defaultDate);
  }, []);

  return (
    <>
      <div className="w-full h-lvh flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl mb-6">Форма ввода расходов</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-200 rounded-xl shadow-sm h-fit w-[30rem] p-5 space-y-4"
        >
          {/* Date */}
          <div className="space-y-2">
            <label className="block">Дата:</label>
            <Datepicker
              language="ru-RU"
              labelTodayButton="Сегодня"
              labelClearButton="Очистить"
              weekStart={1}
              onChange={(date) => setDate(date)}
              value={date}
            />
          </div>

          {/* Sum */}
          <div className="space-y-2">
            <label className="block">Сумма:</label>
            <TextInput
              type="number"
              placeholder="Введите сумму"
              {...register("sum", {
                required: "Введите сумму",
                valueAsNumber: true,
              })}
            />
            {errors.sum && (
              <p className="text-red-500 text-sm">{errors.sum.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block">Категория:</label>
            <Select
              {...register("category", { required: "Выберите категорию" })}
            >
              <option value="">Выберите категорию</option>
              <option value="Продукты">Продукты</option>
              <option value="Коммуналка">Коммуналка</option>
              <option value="Аренда">Аренда</option>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <label className="block">Комментарий:</label>
            <Textarea
              placeholder="Ваш комментарий о данном расходе.."
              {...register("comment")}
            />
          </div>

          {/* Author */}
          <div className="space-y-2">
            <label className="block">Автор:</label>
            <TextInput
              type="text"
              placeholder="Автор"
              {...register("author", {
                required: "Введите ваше имя",
              })}
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 transition-colors duration-200 ease-in-out rounded-xl text-white font-semibold"
            >
              Отправить
            </button>
          </div>
          {message && (
            <div className="w-full p-3 font-bold bg-green-300 rounded-2xl text-white">
              {message}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
