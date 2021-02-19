type NodeValue = string | NodeArray
type NodeArray = Array<NodeValue>

// logic partially taken from https://gist.github.com/aitoroses/a0020005c6b317864da416a270bf9217
/**
 * Takes a parsed symbol array and morph it into JavaScript arrays.
 * @param splitted the splitted array
 */
const syntaxTree = async (split: string[]): Promise<NodeValue> => {
  
  /**
   * 
   * @param nodes list of characters to be processed
   * @param tree 
   * @param parents 
   */
  const parse = (nodes: string[], tree: NodeArray, parents: NodeArray[] = []): NodeArray => {
    
    const cursor = nodes.shift();
    
    // exit condition
    if (!cursor) return tree

    if (cursor !== "(" && cursor !== ")") { // symbol
    
      if (cursor.charAt(0) === "\"") {
        tree.push(JSON.parse(cursor))
      } else {
        tree.push(cursor);
      }
    
    } else if (cursor === "(") { // is a new list
      
      parents.push(tree);

      return parse(nodes, [], parents);

    } else if (cursor === ")") { // close list
    
      const parentAst = parents.pop();
      
      if (parentAst) {
        parentAst.push(tree);
        return parse(nodes, parentAst, parents);
      }

    }

    return parse(nodes, tree, parents);

  }

  return parse(split, [])[0];

}

/**
 * transform takes a string that contains S-Expressions, and creates a tree structure.
 * @param input Input string
 */
const transform = async(input: string): Promise<NodeValue> => {

  // https://rosettacode.org/wiki/S-Expressions#JavaScript
  const matcher = /\s*("[^"]*"|\(|\)|"|[^\s()"]+)/gm;

  const regexResult = input.match(matcher)?.map(v => v.trim());

  if (!regexResult) throw new Error("Regex did not complete.");

  return syntaxTree(regexResult);

}

export { transform };
