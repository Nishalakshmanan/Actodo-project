import { useState } from "react";
import Header from "./Header"
import Card from "./Card";
import TodoContainer from "./TodoContainer";

function Landing() {
  return (
    <div className="bg-black p-5 vs:p-10 sm:p-16">
      <div className="bg-[#EFEFEF]  p-3 vs:p-6 sm:p-10">
        <Header></Header>
        <div className="flex gap-8 justify-between flex-wrap my-4">
          <Card bgcolor="#8272DA" title="23" subtitle="Chennai" ></Card>
          <Card bgcolor="#FD6663" title="20 December " subtitle="14:02:34"></Card>
          <Card bgcolor="#FCA201" title="Built Using" subtitle="React"></Card>
        </div>
        <TodoContainer></TodoContainer>
      </div>
    </div>
  );
}

export default Landing;
