package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    @Qualifier("countryList") // gets the list from country.xml
    private List<Country> countryList;

    public Country getCountry(String code) throws Exception {
        return countryList.stream()
            .filter(country -> country.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElseThrow(() -> new Exception("Country Not Found"));
    }
}
