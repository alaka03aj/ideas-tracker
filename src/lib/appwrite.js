import {Client, Database, Account } from 'appwrite';

const client = new Client();
client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject('ideas-tracker-13');

export const account = new Account(client);
export const databases = new Database(client);