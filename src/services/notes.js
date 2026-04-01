export const generateNotes = async (title, content) => {
  const sentences = content?.split('. ')
    .map(s => s.trim())
    .filter(s => s.length > 20) || [];

  const total = sentences.length;
  const chunk = Math.max(1, Math.floor(total / 5));

  // Detailed Summary — 300-500 words
  const allWords = content?.split(' ') || [];
  const summary = allWords.slice(0, 800).join(' ') + (allWords.length > 800 ? '...' : '');

  // Key Concepts — more detailed
  const keyConcepts = sentences
    .slice(0, Math.min(chunk * 2, total))
    .filter(s => s.length > 30)
    .slice(0, 8)
    .map(s => s.length > 200 ? s.slice(0, 200) + '...' : s);

  // Important Points — more detailed
  const importantPoints = sentences
    .slice(Math.min(chunk, total - 1), Math.min(chunk * 3, total))
    .filter(s => s.length > 30)
    .slice(0, 8)
    .map(s => s.length > 200 ? s.slice(0, 200) + '...' : s);

  // Memory Tricks — facts with numbers
  const memoryTricks = sentences
    .filter(s => s.match(/\d|first|largest|oldest|known|famous|called|named|invented|discovered|founded|established/i))
    .slice(0, 6)
    .map(s => s.length > 200 ? s.slice(0, 200) + '...' : s);

  // Further Reading — more specific
  const furtherReading = [
    "Introduction to " + title,
    "History and origin of " + title,
    "Applications of " + title + " in real world",
    "Future of " + title,
    title + " in India",
    title + " for beginners",
    "Advanced concepts in " + title,
    "Research papers on " + title,
  ];

  // Exam Questions
  const examQuestions = [
    "What is " + title + "? Explain in detail.",
    "What are the key features of " + title + "?",
    "When was " + title + " first introduced or established?",
    "What is the importance of " + title + " in today's world?",
    "Explain the main characteristics of " + title + ".",
    "What are the advantages and disadvantages of " + title + "?",
    "How does " + title + " affect our daily life?",
    "Compare and contrast " + title + " with related concepts.",
    "What are the latest developments in " + title + "?",
    "Write a short note on " + title + ".",
  ];

  return {
    title,
    summary,
    keyConcepts: keyConcepts.length > 0 ? keyConcepts : [summary],
    importantPoints: importantPoints.length > 0 ? importantPoints : sentences.slice(0, 5).map(s => s.slice(0, 200)),
    memoryTricks: memoryTricks.length > 0 ? memoryTricks : ["Remember: " + title + " is an important concept worth studying in detail!"],
    examQuestions,
    furtherReading,
  };
};