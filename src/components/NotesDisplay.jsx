const NotesDisplay = ({ notes }) => {
  if (!notes) return null;

  const copyToClipboard = () => {
    const text = `
STUDY NOTES: ${notes.title}

SUMMARY:
${notes.summary}

KEY CONCEPTS:
${notes.keyConcepts.map((c, i) => `${i + 1}. ${c}`).join('\n')}

IMPORTANT POINTS:
${notes.importantPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}

MEMORY TRICKS:
${notes.memoryTricks.map((m, i) => `${i + 1}. ${m}`).join('\n')}

EXAM QUESTIONS:
${notes.examQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}
    `.trim();
    navigator.clipboard.writeText(text);
    alert("Notes copied to clipboard! ✅");
  };

  const sections = [
    {
      icon: "📝", label: "Quick Summary", key: "summary",
      color: "#a78bfa", bg: "rgba(167,139,250,0.1)",
      border: "rgba(167,139,250,0.3)", isArray: false
    },
    {
      icon: "📌", label: "Key Concepts", key: "keyConcepts",
      color: "#667eea", bg: "rgba(102,126,234,0.1)",
      border: "rgba(102,126,234,0.3)", isArray: true
    },
    {
      icon: "🔑", label: "Important Points", key: "importantPoints",
      color: "#43e97b", bg: "rgba(67,233,123,0.1)",
      border: "rgba(67,233,123,0.3)", isArray: true
    },
    {
      icon: "💡", label: "Memory Tricks", key: "memoryTricks",
      color: "#ffd700", bg: "rgba(255,215,0,0.1)",
      border: "rgba(255,215,0,0.3)", isArray: true
    },
    {
      icon: "📚", label: "Further Reading", key: "furtherReading",
      color: "#43b89c", bg: "rgba(67,184,156,0.1)",
      border: "rgba(67,184,156,0.3)", isArray: true
    },
  ];

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Title + Copy button */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: "28px",
        flexWrap: "wrap", gap: "12px"
      }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "white" }}>
          {notes.title}
        </h2>
        <button
          onClick={copyToClipboard}
          style={{
            background: "rgba(102,126,234,0.15)",
            border: "1px solid rgba(102,126,234,0.3)",
            borderRadius: "12px", padding: "10px 20px",
            color: "#a78bfa", fontWeight: "600",
            fontSize: "14px", cursor: "pointer"
          }}
        >
          📋 Copy All Notes
        </button>
      </div>

      {/* Sections */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        {sections.map((section) => (
          <div key={section.key} style={{
            background: section.bg,
            border: "1px solid " + section.border,
            borderRadius: "20px", padding: "24px",
            transition: "transform 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h3 style={{
              color: section.color, fontWeight: "700",
              fontSize: "16px", marginBottom: "14px"
            }}>
              {section.icon} {section.label}
            </h3>
            {section.isArray ? (
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {notes[section.key].map((item, i) => (
                  <li key={i} style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px", lineHeight: "1.8", marginBottom: "6px"
                  }}>{item}</li>
                ))}
              </ul>
            ) : (
              <p style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px", lineHeight: "1.8", margin: 0
              }}>{notes[section.key]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesDisplay;