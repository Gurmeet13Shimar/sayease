import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Task } from "./models/Task.js";
import { Note } from "./models/Note.js";
import { Journal } from "./models/Journal.js";

class MongoStorage {
  async getUser(id) {
    if (!mongoose.isValidObjectId(id)) return undefined;
    return await User.findById(id).lean();
  }

  async getUserByUsername(username) {
    return await User.findOne({ username }).lean();
  }

  async getUserByEmail(email) {
    return await User.findOne({ email }).lean();
  }

  async createUser(insertUser) {
    const doc = await User.create(insertUser);
    return doc.toObject();
  }

  async getTasks(userId) {
    return await Task.find({ userId }).sort({ createdAt: -1 }).lean();
  }

  async getTask(id) {
    if (!mongoose.isValidObjectId(id)) return undefined;
    return await Task.findById(id).lean();
  }

  async createTask(insertTask) {
    const doc = await Task.create(insertTask);
    return doc.toObject();
  }

  async updateTask(id, updates) {
    if (!mongoose.isValidObjectId(id)) return undefined;
    return await Task.findByIdAndUpdate(id, updates, { new: true }).lean();
  }

  async deleteTask(id) {
    if (!mongoose.isValidObjectId(id)) return false;
    const res = await Task.findByIdAndDelete(id);
    return !!res;
  }

  async getNotes(userId) {
    return await Note.find({ userId }).sort({ updatedAt: -1 }).lean();
  }

  async getNote(id) {
    if (!mongoose.isValidObjectId(id)) return undefined;
    return await Note.findById(id).lean();
  }

  async createNote(insertNote) {
    const doc = await Note.create(insertNote);
    return doc.toObject();
  }

  async updateNote(id, updates) {
    if (!mongoose.isValidObjectId(id)) return undefined;
    return await Note.findByIdAndUpdate(id, { ...updates, $set: { updatedAt: new Date() } }, { new: true }).lean();
  }

  async deleteNote(id) {
    if (!mongoose.isValidObjectId(id)) return false;
    const res = await Note.findByIdAndDelete(id);
    return !!res;
  }

  async getJournals(userId) {
    return await Journal.find({ userId }).sort({ date: -1 }).lean();
  }

  async getJournal(id) {
    if (!mongoose.isValidObjectId(id)) return undefined;
    return await Journal.findById(id).lean();
  }

  async createJournal(insertJournal) {
    const doc = await Journal.create(insertJournal);
    return doc.toObject();
  }

  async deleteJournal(id) {
    if (!mongoose.isValidObjectId(id)) return false;
    const res = await Journal.findByIdAndDelete(id);
    return !!res;
  }
}

export const storage = new MongoStorage();


