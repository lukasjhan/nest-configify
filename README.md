# NestJS Library Starter

Welcome to the NestJS Library Starter! This template repository is designed to help you quickly set up and develop libraries for NestJS applications. It comes pre-configured with essential build and test tools, allowing you to focus on writing your library code without worrying about the setup.

## Features

- 🚀 Pre-configured NestJS environment
- 📦 Ready-to-use build setup
- 🧪 Testing infrastructure in place
- 📚 Easy-to-follow project structure
- 🛠 Development tools and scripts included

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone this repository or create repository from this template:

   ```
   git clone https://github.com/lukasjhan/nestjs-lib-starter your-library-name
   ```

2. Navigate to the project directory:

   ```
   cd your-library-name
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Project Structure

```
nestjs-lib-starter/
├── src/
│   ├── index.ts        # Main entry point
│   └── ...             # Your library code goes here
├── test/
│   └── ...             # Test files
├── package.json
├── tsconfig.json
└── README.md
```

## Development

### Writing Your Library Code

1. Place your library code in the `src/` directory.
2. Update `src/index.ts` to export your library's public API.

### Building the Library

To build your library, run:

```
npm run build
```

This will compile your TypeScript code and generate output in the `dist/` directory.

### Running Tests

To run the test suite:

```
npm test
```

This will execute all tests in the `test/` directory using Jest.

## Publishing Your Library

1. Update `package.json` with your library's information (name, version, description, etc.).
2. Build your library: `npm run build`
3. Publish to npm: `npm publish`

## Scripts

- `npm run build`: Builds the library
- `npm run test`: Runs the test suite
- `npm run lint`: Lints the code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE-TEMPLATELICENSE) file for details.

## Support

If you encounter any problems or have questions, please open an issue in the GitHub repository.

---

Happy coding! We hope this starter template helps you create amazing NestJS libraries. 🚀
