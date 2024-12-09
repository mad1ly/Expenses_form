import { Datepicker, Select, Textarea, TextInput } from "flowbite-react";
import React from "react";

function App() {
  return (
    <>
      <div className="w-full h-lvh flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl mb-6">Форма ввода расходов</h1>
        <div className="bg-gray-200 rounded-xl shadow-sm h-fit w-[30rem] p-5 space-y-4">
          {/* Date */}
          <div className="space-y-2">
            <span>Дата:</span>
            <Datepicker
              language="ru-RU"
              labelTodayButton="Сегодня"
              labelClearButton="Очистить"
              weekStart={1}
            />
          </div>
          {/* Sum */}
          <div className="space-y-2">
            <span>Сумма:</span>
            <TextInput type="number" />
          </div>
          {/* Category */}
          <div className="space-y-2">
            <span>Категория:</span>
            <Select>
              <option>Продукты</option>
              <option>Коммуналка</option>
              <option>Аренда</option>
            </Select>
          </div>
          {/* Comment */}
          <div className="space-y-2">
            <span>Комментарий:</span>
            <Textarea
              className="min-h-40"
              placeholder="Ваш комментарий о данном расходе.."
            />
          </div>
          {/* Submit */}
          <div>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 transition-colors duration-200 ease-in-out rounded-xl text-white font-semibold">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
