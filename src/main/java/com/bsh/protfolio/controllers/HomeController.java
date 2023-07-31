package com.bsh.protfolio.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/")
public class HomeController {

    @RequestMapping(value="/", method = RequestMethod.GET)
    public ModelAndView getPortfolio(){
        ModelAndView modelAndView = new ModelAndView("home/protfolio");
        return modelAndView;
    }
}
