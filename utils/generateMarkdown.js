const map = new Map();
map.set('Apache-2.0', {
  badge: '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  link: 'https://opensource.org/licenses/Apache-2.0'
});
map.set('GPL v3', {
  badge: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  link: 'https://www.gnu.org/licenses/gpl-3.0'
});
map.set('MIT', {
  badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  link: 'https://opensource.org/licenses/MIT'
});
map.set('CC0-1.0', {
  badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
  link: 'http://creativecommons.org/publicdomain/zero/1.0/'
});

const sections = ['description', 'installation', 'usage', 'license', 'contributing', 'tests', 'questions'];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && map.has(license)) {
    return map.get(license).badge;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && map.has(license)) {
    return map.get(license).link;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && map.has(license)) {
    let str = `This application is licensed under the ${license}. See the [LICENSE](${renderLicenseLink(license)}) file for details.\n\n`;
    return str;
  } else {
    return '';
  }
}

function getTableOfContents(data) {
  let str = '## Table Of Contents\n';
  for (let section of sections) {
    if (!data[section]) {
      return '';
    }
    str = str + ' - [' + section[0].toUpperCase() + section.substring(1) + '](#' + section + ')\n\n';
  }
  return str + '\n\n';
}

function generateSections(name, desc) {
  if (!desc) {
    return '';
  }
  name = name[0].toUpperCase() + name.substring(1);
  return `\n ## ${name}\n #### ${desc}\n <br> \n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let str = '';
  let license = renderLicenseBadge(data['license']);
  if (license) {
    str = `${license}\n\n`;
  }
  str += `# ${data.title} \n ${getTableOfContents(data)}`;
  for (let section of sections) {
    switch (section) {
      case 'questions':
        let qs = '';
        if (`${data.username}`) {
          let profile = 'https://github.com/' + data['username'];
          qs += `Github profile (${profile})\n`
        }
        if (`${data.email}`) {
          let email = `Email address : ${data.email}`;
          qs += email;
        }
        if (qs.length > 0) {
          qs = 'If you have any questions or need further clarification, feel free to reach out. We are here to help! You can ask questions by creating an issue in this repository or by reaching out to me \n' + qs;
        }
        str += generateSections(section, qs);
        break;
      case 'license':
        str += generateSections(section, renderLicenseSection(data['license']));
        break;
      default: {
        str += generateSections(section, data[section]);
      }
    }
  }
  str += `\n [Readme Generator Video](https://drive.google.com/file/d/1kdXBRbA2X7FWoaCnySo849sXqzGDIa8s/view?usp=drive_link)`;
  return str;
}

module.exports = generateMarkdown;
