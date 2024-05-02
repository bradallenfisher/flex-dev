type NodeType = string;

interface Mark {
  type: string;
}

interface ContentNode {
  nodeType: NodeType;
  data: Record<string, any>;
  content?: ContentNode[];
  marks?: Mark[];
  value?: string; // For text nodes
}

interface Document {
  nodeType?: NodeType;
  data: Record<string, any>;
  content: ContentNode[];
}

// Type for the entire JSON structure
export type RichTextJsonStructure = Document;
