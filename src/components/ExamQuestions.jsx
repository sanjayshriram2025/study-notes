const ExamQuestions = ({ questions }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div style={{
      marginTop: "24px",
      background: "rgba(255,107,107,0.08)",
      border: "1px solid rgba(255,107,107,0.2)",
      borderRadius: "20px", padding: "24px"
    }}>
      <h3 style={{
        color: "#ff6b6b", fontWeight: "800",
        fontSize: "20px", marginBottom: "20px",
        display: "flex", alignItems: "center", gap: "10px"
      }}>
        ❓ Possible Exam Questions
        <span style={{
          background: "rgba(255,107,107,0.15)",
          border: "1px solid rgba(255,107,107,0.3)",
          borderRadius: "20px", padding: "2px 12px",
          fontSize: "13px", fontWeight: "600", color: "#ff6b6b"
        }}>
          {questions.length} questions
        </span>
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {questions.map((question, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: "14px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px", padding: "14px 16px"
          }}>
            <span style={{
              background: "rgba(255,107,107,0.2)",
              border: "1px solid rgba(255,107,107,0.3)",
              borderRadius: "8px", padding: "2px 10px",
              color: "#ff6b6b", fontSize: "13px",
              fontWeight: "700", minWidth: "32px",
              textAlign: "center"
            }}>Q{i + 1}</span>
            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "14px", lineHeight: "1.7", margin: 0
            }}>{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamQuestions;