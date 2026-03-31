export const generateNotes = async (title, content) => {
  const sentences = content?.split('. ')
    .map(s => s.trim())
    .filter(s => s.length > 20) || [];

  const total = sentences.length;
  const chunk = Math.max(1, Math.floor(total / 5));

  // Key Concepts — first few sentences
  const keyConcepts = sentences
    .slice(0, Math.min(chunk * 2, total))
    .filter(s => s.length > 30)
    .slice(0, 5)
    .map(s => s.length > 150 ? s.slice(0, 150) + '...' : s);

  // Summary — first 150 words
  const allWords = content?.split(' ') || [];
  const summary = allWords.slice(0, 150).join(' ') + (allWords.length > 150 ? '...' : '');

  // Important Points — middle sentences
  const importantPoints = sentences
    .slice(Math.min(chunk, total - 1), Math.min(chunk * 3, total))
    .filter(s => s.length > 30)
    .slice(0, 6)
    .map(s => s.length > 150 ? s.slice(0, 150) + '...' : s);

  // Memory Tricks — facts with numbers
  const memoryTricks = sentences
    .filter(s => s.match(/\d|first|largest|oldest|known|famous|called|named|invented|discovered/i))
    .slice(0, 4)
    .map(s => s.length > 150 ? s.slice(0, 150) + '...' : s);

  // Exam Questions — auto generated
  const examQuestions = [
    "What is " + title + "?",
    "What are the key features of " + title + "?",
    "When was " + title + " first introduced or established?",
    "What is the importance of " + title + " in today's world?",
    "Explain the main characteristics of " + title + ".",
    "What are the advantages and disadvantages of " + title + "?",
    "How does " + title + " affect our daily life?",
    "Compare and contrast " + title + " with related concepts.",
  ];

  // Further Reading
  const furtherReading = [
    "Introduction to " + title,
    "History of " + title,
    "Applications of " + title,
    "Future of " + title,
    title + " in India",
  ];

  return {
    title,
    summary,
    keyConcepts: keyConcepts.length > 0 ? keyConcepts : [summary],
    importantPoints: importantPoints.length > 0 ? importantPoints : sentences.slice(0, 4).map(s => s.slice(0, 150)),
    memoryTricks: memoryTricks.length > 0 ? memoryTricks : ["Remember: " + title + " is an important concept!"],
    examQuestions,
    furtherReading,
  };
};