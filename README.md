# ml-transform

## Requirements

- MarkLogic
- Node.js

## Running the Examples

1. Install dependencies:

   ```npm install```

2. Copy `config_sample.js` to `config.js` and then edit `config.js` for your environment (username, password, etc.).

3. Set up the database and REST server:

   ```node setup```

4. Install the transform:

   ```node install```

5. Write documents using the installed transform:

   ```node use-*```

5. To undo the setup step and start over:

   ```node teardown```
