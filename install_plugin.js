#!/usr/bin/env node

var exec = require('child_process').exec;
var YAML = require('js-yaml');
var fs = require('fs');

function execCommand(cfg, callback) {
    var cmd = 'sh install_plugin.sh {{repo}} {{dir}}/{{subdir}} {{@key}}';
    cmd = cmd.replace('{{repo}}',cfg.repo);
    cmd = cmd.replace('{{dir}}',cfg.dir);
    cmd = cmd.replace('{{subdir}}',cfg.subdir);
    cmd = cmd.replace('{{@key}}',cfg['@key']);
    console.log("! " + cmd + ' ;');
    //    var child = exec('cat *.js bad_file | wc -l', callback);
    var child = exec(cmd, callback);
}

var generators = YAML.load(fs.readFileSync('generators.yaml'));

var cmd0 = 'sh install_plugin.sh https://github.com/val314159/raml-python-generator raml-python-generator/languages/python python';
var cmd = 'sh install_plugin.sh {{url}} {{dir}}/{{subdir}} {{@key}}';

if (process.argv.length<3) {
    console.log("=====================================");
    console.log("List of default generator repo_names:");
    for (var key in (generators.repos)) {
	var repo = generators.repos[key];
	console.log(" - " + key + ": "+ repo.desc);
    }
    console.log("=====================================");
    console.log("List of installed generator repo_names:");
    langs = require('./languages/languages.js');
    for (var n=0; n<langs.length; n++) {
	var v = langs[n];
	if (v) {
	    console.log(" * " + v);
	}
    }
    console.log("==================================-==");
    console.log("Usage:");
    var prog = process.argv[1].split('/');
    console.log(" to list plugins:");
    console.log("    "+prog[prog.length-1]);
    console.log(" to install new plusins:");
    console.log("    "+prog[prog.length-1]+" [repo_name]");
}

process.argv.forEach(function(val, index, array) {
	if (index>1) {
	    console.log('0 ----;//////////// ////////////: ' + val);
	    generators.repos[val]['@key']=val;
	    console.log(generators.repos[val]);
	    console.log('5 ----;');
	    execCommand(generators.repos[val],function(){
		    console.log("FINISHED!!!");
		});
	    console.log('9 ----;');
	}
    });
