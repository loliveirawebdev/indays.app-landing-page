import { atom, selector } from "recoil";

const BASE_SECTION_REF_BUCKET = atom<App.SectionRef[]>({
  key: "baseSectionRefBucket",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((v) => console.log(v));
    },
  ],
});

export const SECTION_REF_BUCKET = selector<App.SectionRef[]>({
  key: "sectionRefBucket",
  get: ({ get }) => get(BASE_SECTION_REF_BUCKET),
  set: ({ get, set }, newRef) => {
    const oldRefs = get(BASE_SECTION_REF_BUCKET);
    const newRefs = [...oldRefs, ...(newRef as any)];
    set(BASE_SECTION_REF_BUCKET, newRefs);
  },
});
