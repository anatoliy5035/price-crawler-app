module.exports = function (emailLink) {
  return `
 <div class="person">
    <h2>
        Hello man
    </h2>
    <p>Please confirm email</p>
    <a href="${emailLink}">Click link to confirm</a>
 </div>
`;
};
