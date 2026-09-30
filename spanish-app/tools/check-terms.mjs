// 读取 stdin 的 JSON: { terms:[...], text:"..." }，
// 用与审计脚本同一套形态学逻辑，输出未命中的 term 列表。
import { exampleCoversTerm } from '../scripts/spanish-morphology.mjs';

let raw = '';
process.stdin.setEncoding('utf8');
for await (const chunk of process.stdin) raw += chunk;
const { terms = [], text = '' } = JSON.parse(raw || '{}');
const missing = terms.filter(t => !exampleCoversTerm(t, text));
process.stdout.write(JSON.stringify(missing));
