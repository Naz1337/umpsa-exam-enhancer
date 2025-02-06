# UMPSA Exam Enhancer

## Introduction

The **UMPSA Exam Enhancer** is a userscript designed to improve the interface and functionality of the UMPSA exam paper website. It makes it easier for students to browse, search, and access past exam papers. The script enhances the user experience by providing a more organized and user-friendly interface, allowing students to quickly find the exam papers they need.

## Features

- **Improved Interface**: The script just modify the UI...
- **Sorting**: Exam papers are sorted by semester in descending order by default (you cant choose, yet...).
- **Duplicate Removal**: Removes duplicate entries for the same exam paper in the same semester.
- **Quick Access**: Provides same page PDF Review...

## Installation

To install and use the UMPSA Exam Enhancer, follow these steps:

1. **Install a Userscript Extension**:
   - For **Google Chrome**: Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
   - For **Mozilla Firefox**: Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).
   - For **Microsoft Edge**: Install [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/Naz1337/umpsa-exam-enhancer.git
   cd umpsa-exam-enhancer
   ```

3. **(Optional) Set Up Environment Variables**:
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Open the `.env` file and set the `COPY_POSTBUILD` variable to `true` if you want the script to be automatically copied to your clipboard after building.

4. **Install Dependencies**:
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

5. **Build the Userscript**:
   - Build the userscript by running:
     ```bash
     npm run build
     ```

6. **Get the Userscript**:
   - If you set the `COPY_POSTBUILD` variable to `true` in the `.env` file, the script will be automatically copied to your clipboard after the build process.
   - If not, you can find the generated userscript in the `dist` folder.

7. **Install the Userscript**:
   - Open your userscript manager (e.g., Tampermonkey).
   - Create a new script and paste the contents of the generated userscript into the editor.
   - Save the script.

## Usage

Go to [The Exam Search Page](https://apps-oss-ump-edu-my.libraryumpsa.idm.oclc.org/exam/) and select which paper you want to search for, the script will run on the next screen...

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using the UMPSA Exam Enhancer! We hope it makes your exam preparation easier and more efficient. If you have any questions or need further assistance, feel free to reach out.