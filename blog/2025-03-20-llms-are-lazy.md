---
slug: llms-are-lazy
title: LLMs Are Lazy - Decoding "Summarization" in Vibe Coding
authors: kennethjiang
tags: [vibe-coding, llm, ai-assisted-programming, translation]
image: /img/blog/llms-lazy-cover.webp
---

Embarking on the journey of translating C++ code into TypeScript, I enlisted the assistance of Claude 3.5 Sonnet, Anthropic's AI language model. My objective was to achieve a faithful, line-by-line translation of Config.hpp and Config.cpp, ensuring type safety by utilizing TypeScript types that closely mirror the original C++ structs and classes. The aim was to preserve the original file and class structure.

## **"Lazy" AI**

![LLM Lazy Summarization](/img/blog/llm-lazy-summarization.png)

**My prompt is as follows:**
*write equivalent typescript code that is a FAITHFUL, LINE-BY-LINE, FAITHFUL translation of the Config.hpp and Config.cpp files. Try to maintain the type-safety using the typescript types that are closest to the original c++ structs/classes. Whenever possible, maintain the original file and class structure found in the c++ source files.*

**Excerpt from Config.cpp:**

```cpp
...
            else if (boost::iequals(it.key(), BBL_JSON_KEY_IS_CUSTOM)) {
                key_values.emplace(BBL_JSON_KEY_IS_CUSTOM, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_NAME)) {
                key_values.emplace(BBL_JSON_KEY_NAME, it.value());
                if (it.value() == "project_settings")
                    is_project_settings = true;
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_URL)) {
                key_values.emplace(BBL_JSON_KEY_URL, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_TYPE)) {
                key_values.emplace(BBL_JSON_KEY_TYPE, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_SETTING_ID)) {
                key_values.emplace(BBL_JSON_KEY_SETTING_ID, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_FILAMENT_ID)) {
                key_values.emplace(BBL_JSON_KEY_FILAMENT_ID, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_FROM)) {
                key_values.emplace(BBL_JSON_KEY_FROM, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_DESCRIPTION)) {
                key_values.emplace(BBL_JSON_KEY_DESCRIPTION, it.value());
            }
            else if (boost::iequals(it.key(), BBL_JSON_KEY_INSTANTIATION)) {
                key_values.emplace(BBL_JSON_KEY_INSTANTIATION, it.value());
            }
            else if (!load_inherits_to_config && boost::iequals(it.key(), BBL_JSON_KEY_INHERITS)) {
                key_values.emplace(BBL_JSON_KEY_INHERITS, it.value());
            }
            else {
                t_config_option_key opt_key = it.key();
                std::string value_str;

                if (it.value().is_string()) {
                    //bool test1 = (it.key() == std::string("end_gcode"));
                    this->set_deserialize(opt_key, it.value(), substitution_context);
                    //some logic for special values
                    if (opt_key == "support_type") {
                        //std::string new_value = dynamic_cast<ConfigOptionString*>(this->option(opt_key))->value;
                        if (it.value() == "hybrid(auto)") {
                            different_settings_append.push_back(opt_key);
                            different_settings_append.push_back("support_style");
                            new_support_style = "tree_hybrid";
                        }
                    } else if (opt_key == "wall_infill_order") {
                        //BBS: check wall_infill order to decide if it be different and append to diff_setting_append
                        if (it.value() == "outer wall/inner wall/infill" || it.value() == "infill/outer wall/inner wall" || it.value() == "inner-outer-inner wall/infill") {
                            get_wall_sequence = "wall_seq_diff_to_system";
                        }

                        if (it.value() == "infill/outer wall/inner wall" || it.value() == "infill/inner wall/outer wall") {
                            different_settings_append.push_back("is_infill_first");
                            is_infill_first = "true";
                        }
                    }
                }
                else if (it.value().is_array()) {
                    t_config_option_key opt_key_src = opt_key;
                    this->handle_legacy(opt_key, value_str);

...
```

**Generated TypeScript Code:**

```typescript
...
                else if (key.toLowerCase() === BBL_JSON_KEY_NAME.toLowerCase()) {
                    keyValues.set(BBL_JSON_KEY_NAME, String(value));
                    if (value === 'project_settings') {
                        isProjectSettings = true;
                    }
                }
                // ... Handle other special keys similarly

                else {
                    const optKey = key;

                    if (typeof value === 'string') {
                        this.setDeserialize(optKey, value, substitutionContext);

                        // Handle special values
                        if (optKey === 'support_type' && value === 'hybrid(auto)') {
                            differentSettingsAppend.push(optKey);
                            differentSettingsAppend.push('support_style');
                            newSupportStyle = 'tree_hybrid';
                        }
                        // ... Handle other special cases
                    }
                    else if (Array.isArray(value)) {
                        // Handle array values
                        const valueStr = value
...
```

Notice the placeholders such as `// ... Handle other special keys similarly` and `// ... Handle other special cases`. These ellipses indicated that Claude had opted to summarize or omit sections of the code, rather than providing the exhaustive line-by-line translation I had requested.

This wasn't an isolated incident; I've frequently encountered similar summarizations in my code translation endeavors.

## **Delving into the Causes**

Understanding why Claude produced these summaries requires a deep dive into the intricacies of large language models (LLMs) and their behavior during code generation tasks. Several factors might contribute to this phenomenon:

### 1\. **Summarization Tendencies in LLMs**

LLMs are often trained on vast datasets that include both natural language and code. During training, they learn patterns and structures prevalent in the data. When encountering repetitive or structurally similar code segments, the model might infer that summarizing these segments is acceptable or even preferable. This behavior aligns with the model's exposure to summarization tasks during training, where brevity and conciseness are valued.

In the context of code translation, if the model identifies multiple else if branches that differ only slightly, it might choose to represent them with placeholders, assuming that the user can extrapolate the pattern. This inclination towards summarization can be traced back to the model's training on datasets where redundancy is minimized, and patterns are often abstracted for brevity.

### 2\. **Avoidance of Overly Verbose Outputs**

LLMs are designed to balance informativeness with conciseness. When generating code, especially for languages like TypeScript that emphasize readability and maintainability, the model might prioritize producing clean and concise code over a verbatim translation. This can lead to the omission of repetitive structures in favor of more abstract representations.

For instance, in the translation process, if the model encounters numerous similar conditional statements, it might opt to condense them, believing that this approach aligns with best coding practices. This behavior suggests that the model is not merely translating code but also attempting to apply coding conventions that favor clarity and brevity.

### 3\. **Balancing Fidelity and Best Practices**

Translating code between languages is not always a straightforward process. Different programming languages have distinct paradigms and idioms. A direct line-by-line translation might result in code that is syntactically correct but does not adhere to the target language's best practices. Claude might have been attempting to strike a balance between fidelity to the original C++ code and the idiomatic use of TypeScript.

In C++, it's common to see multiple else if branches handling various cases. However, in TypeScript, especially with the use of modern features, such patterns might be refactored into more concise constructs, such as using a mapping object or a switch-case statement. Claude's summarization could be an attempt to guide the developer towards these idiomatic patterns, even if it means deviating from a strict line-by-line translation.

### 4\. **Context Window Limitations**

LLMs have a finite context window, meaning they can only process and generate a limited number of tokens in a single interaction. When tasked with generating large amounts of code, the model might "get lazy," summarizing sections with comments like "rest of the code remains the same" to stay within its token limit.

This limitation can lead the model to truncate or summarize parts of the code to ensure that the most critical sections are included within the output. While this behavior is intended to provide a manageable response length, it can result in incomplete translations when the input code exceeds the model's processing capacity.

### 5\. **Influence of Training Data**

The behavior of LLMs is heavily influenced by their training data. If the model has been trained on datasets where repetitive code patterns are often summarized or abstracted, it might learn to replicate this behavior. This means that even if the user requests a detailed, line-by-line translation, the model might default to summarization based on patterns it has learned during training.

For example, if the training data includes numerous instances where repetitive code blocks are condensed for brevity, the model might infer that this is the preferred approach. This learned behavior can manifest in scenarios where the user expects detailed output, leading to a mismatch between the user's expectations and the model's output.

### 6\. **Challenges in Enforcing Output Constraints**

Controlling the length and structure of outputs from LLMs is a non-trivial task. Achieving strict or approximate length control in large language model outputs reveals fundamental mathematical and computational challenges.

This inherent difficulty can result in the model producing outputs that do not strictly adhere to the user's specifications, especially when those specifications require detailed and lengthy responses. The model's internal mechanisms for managing output length might lead it to summarize or omit sections to comply with its learned constraints, even if this contradicts the user's explicit instructions.

## **Mitigation Strategies**

I don't have a perfect solution to this problem yet. So far, I have found a couple of workarounds to help mitigate the issue. They are not completely reliable, so you should always be cautious about the output if you are in the same situation.

### 1\. **Chunking the Code**

Breaking down the source code into smaller, manageable chunks can help the model process each segment more effectively. This approach ensures that the model's context window is not overwhelmed, reducing the likelihood of summarization.

### 2\. **Explicit Prompting**

Crafting clear and detailed prompts that specify the desired output format can guide the model towards generating the expected translation. Including instructions that emphasize the need for a faithful, line-by-line translation without summarization.