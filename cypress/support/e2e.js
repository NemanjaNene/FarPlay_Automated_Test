import './Commands/loginCommands';
import './Commands/formCommands';
import './Commands/systemCommands';
import './Commands/signupCommands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Minified React error #418')) {
    return false;
  }
  if (err.message.includes('Hydration')) {
    return false;
  }
  return true;
});
