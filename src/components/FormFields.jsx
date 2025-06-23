export const Input = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
    />
  </div>
);

// Reusable Select Component
export const Select = ({ label, options }) => (
  <div className="flex flex-col text-sm w-full">
    <label className="mb-1 font-medium">{label}</label>
    <select className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400">
      {options.map((option, i) => (
        <option key={i} value={option === "Select One" ? "" : option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// Reusable Textarea Component
export const Textarea = ({ label, placeholder }) => (
  <div className="flex flex-col text-sm">
    <label className="mb-1 font-medium">{label}</label>
    <textarea
      rows={3}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400"
    ></textarea>
  </div>
);
