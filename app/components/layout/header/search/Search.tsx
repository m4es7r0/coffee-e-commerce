import { FC } from "react";
import styles from "./search.module.scss";

import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const Search: FC = () => {
  return (
    <div className={styles.search}>
      <InputGroup>
        <Input
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
          children={<SearchIcon color={"#9ca3af"} className="scale-x-[-1] " />}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
