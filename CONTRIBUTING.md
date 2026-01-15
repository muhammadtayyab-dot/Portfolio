# Contributing to AI Wizard Portfolio

Thank you for your interest in contributing! Here are some guidelines to help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/Portfolio.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Install dependencies: `npm install`

## Development Setup

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Setup database
npm run db:push

# Start development server
npm run dev
```

## Code Style

- Follow the existing code style
- Use TypeScript for new features
- Run type checking: `npm run check`
- Use meaningful commit messages

## Commit Message Format

```
type: subject

Optional body with more details

- Bullet points for changes
- Reference issues when applicable
```

Types:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build/dependency updates

## Submitting Changes

1. Push your branch to your fork
2. Create a Pull Request with a clear description
3. Reference any related issues (e.g., `Fixes #123`)
4. Wait for review and address any feedback

## Reporting Bugs

Please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details

## Questions?

Feel free to open an issue or contact us directly.

Thank you for contributing! 🚀
