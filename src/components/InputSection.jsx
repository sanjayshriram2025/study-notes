const subjects = [
  "All Subjects", "Science", "Mathematics", "History",
  "Geography", "Computer Science", "Literature",
  "Civics", "Chemistry", "Physics", "Biology"
];

const InputSection = ({ onGenerate, loading }) => {
  return (
    <div style={{
      maxWidth: "700px", margin: "0 auto",
      display: "flex", flexDirection: "column", gap: "16px"
    }}>
      <textarea
        id="notesInput"
        placeholder="Type a topic like 'Photosynthesis' or paste any text you want to convert to notes..."
        rows={5}
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "16px", padding: "16px 20px",
          color: "white", fontSize: "15px",
          outline: "none", resize: "vertical",
          fontFamily: "'Segoe UI', sans-serif",
          lineHeight: 1.7
        }}
      />

      <div style={{ display: "flex", gap: "12px" }}>
        <select
          id="subjectSelect"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "12px", padding: "12px 16px",
            color: "white", fontSize: "14px",
            outline: "none", cursor: "pointer",
            fontFamily: "'Segoe UI', sans-serif"
          }}
        >
          {subjects.map((s, i) => (
            <option key={i} value={s} style={{ background: "#1a1a2e" }}>{s}</option>
          ))}
        </select>

        <button
          onClick={() => {
            const input = document.getElementById("notesInput").value;
            if (input.trim()) onGenerate(input.trim());
          }}
          disabled={loading}
          style={{
            flex: 1,
            background: loading ? "rgba(102,126,234,0.5)" : "linear-gradient(135deg, #667eea, #764ba2)",
            border: "none", borderRadius: "12px",
            padding: "12px 28px", color: "white",
            fontWeight: "700", fontSize: "15px",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 4px 15px rgba(102,126,234,0.3)"
          }}
        >
          {loading ? "⏳ Generating..." : "📝 Generate Notes →"}
        </button>
      </div>
    </div>
  );
};

export default InputSection;