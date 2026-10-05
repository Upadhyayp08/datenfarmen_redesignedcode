export function DeleteServer({ onCancel, onDone }) {
  return (
    <div>
      <p>
        Are you sure you want to delete ? This will permanently remove the
        instance, any unattached local storage. This action cannot be undone.
      </p>
      <div className="modal-actions">
        <button className="button secondary" onClick={onCancel}>
          Cancel
        </button>
        <button className="button danger" onClick={onDone}>
          Delete Permanently
        </button>
      </div>
    </div>
  );
}
