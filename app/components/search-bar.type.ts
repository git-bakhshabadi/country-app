export interface SearchBarProps {
  modelValue: string;
}

export interface SearchBarEmits {
  "update:modelValue": [value: string];
}
