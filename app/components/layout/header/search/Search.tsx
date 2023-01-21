import { FC, useRef } from "react";
import styles from "./search.module.scss";

import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const Search: FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.search}>
      <InputGroup>
        <Input
          ref={searchInputRef}
          variant="flushed"
          type="search"
          placeholder="Search"
          height="7"
          borderBottom="1px"
          borderBottomColor="#9ca3af"
          focusBorderColor="#9ca3af"
          className="placeholder:tracking-widest uppercase font-[500]"
        />
        <InputRightElement
          justifyContent="end"
          height="7"
          width="fit-content"
          _hover={{ cursor: "pointer" }}
          children={<SearchIcon color={"#9ca3af"} className="scale-x-[-1] " />}
          onClick={() => {
            searchInputRef.current?.focus();
          }}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
