import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Filter, Task } from '../types/task';
import { taskStorage } from '../data/taskStorage';

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function askConfirm(title: string, message: string): boolean {
  return window.confirm(`${title}\n\n${message}`);
}