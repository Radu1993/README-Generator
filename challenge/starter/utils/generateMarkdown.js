// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
}


// function to generate markdown for README

  Description :
${data.description}
;
Table:
${data.table}
;


Installation:

${data.installation};

Usage

${data.usage};

License
${data.license};

Contributing
${data.contribute};

Tests:
${data.tests};

Questions
${data.questions}`;
}

module.exports = generateMarkdown;