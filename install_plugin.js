#!/usr/bin/env node

var exec = require('child_process').exec;
var YAML = require('js-yaml');
var fs = require('fs');

console.log('ok');

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
