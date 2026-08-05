---
name: create-instructions
description: This prompt generates a concise and clear .md instructions file in markdown format for the /docs directory based on the provided information about a layer of architecture or coding standards within this app. The generated instructions should be highly specific, actionable, and easy to follow, ensuring that developers can implement the guidelines effectively.
argument-hint: The inputs this prompt expects, e.g., "a task to implement"
agent: Instruction Generator
---

Take the information below and generate an agent instructions .md file for it in the /docs directory. If a .md filename is provided, use that, otherwise generate an appropriate filename based on the generated content. Make sure the instructions are concise and not too long. Make sure to update the AGENTS.md file to reference this new docs file. 

If no information is provided below, prompt the use rto give the necessary details about the layer of architecture or coding standards to generate the instructions.