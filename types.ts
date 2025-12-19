
import React from 'react';

export interface ThemePoint {
  def: string;
  points: string[];
  example: string;
  error: string;
  icon: React.ReactNode;
}

export interface GlossaryItem {
  id: number;
  title: string;
  definition: string;
  example: string;
  icon: React.ReactNode;
  keyPoints: string[];
  realApplication: string[];
  reflection: string;
}

export interface MatrixCell {
  tag: string;
  titulo: string;
  explicacion: string;
  ejemplo: string;
  aporteUX: string;
}

export interface MatrixData {
  [key: string]: MatrixCell;
}
