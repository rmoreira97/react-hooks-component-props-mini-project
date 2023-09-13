import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const emojiArray = [];
  for (let i = 0; i < minutes; i += 5) {
    emojiArray.push(emoji);
  }
  const emojiString = emojiArray.join("");
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojiString} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
