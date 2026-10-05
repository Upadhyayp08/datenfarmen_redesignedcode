export function Field({
  label,
  placeholder,
  type = "text",
  required = false,
  area = false,
  name,
}) {
  return (
    <label className="field">
      <span>{label}</span>

      {area ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={2}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
}
