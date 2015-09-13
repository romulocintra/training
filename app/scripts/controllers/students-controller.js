/*
 Copyright (c) 2015 GFT Appverse, S.L., Sociedad Unipersonal.
 This Source Code Form is subject to the terms of the Appverse Public License
 Version 2.0 (“APL v2.0”). If a copy of the APL was not distributed with this
 file, You can obtain one at http://www.appverse.mobi/licenses/apl_v2.0.pdf. [^]
 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the conditions of the AppVerse Public License v2.0
 are met.
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
 SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

/*
 * Controller studentsController for students.
 * Pay attention to injection of dependencies (factories, entities and Angular objects).
 */
angular.module('App.Controllers')

.controller('studentsController', ['$scope',
        function ($scope) {
        $scope.name = 'students';
        $scope.showEdit = false;
        // Students List
        $scope.students = [
            {
                name: 'Tony',
                office: 'Barcelona',
                active: true,
                role: 'developer',
                age: 29
            },
            {
                name: 'Maria',
                office: 'Valencia',
                active: true,
                role: 'marketing',
                age: 34
            },
            {
                name: 'Peter',
                office: 'Warsaw',
                active: true,
                role: '.net Developer',
                age: 21
            },

            {
                name: 'Richard',
                office: 'Lleida',
                active: true,
                role: 'Angular Teach',
                age: 40
            }
            ,

            {
                name: 'Anna',
                office: 'Lleida',
                active: true,
                role: 'Developer',
                age: 23
            }
        ];


        // Edit Student
        $scope.editStudent = function (index) {
            $scope.EditFORM = angular.copy($scope.students);
            $scope.stdIndex = index;

        }

        // Remove Student
        $scope.removeStudent = function (index) {
            $scope.students.splice(index, 1);
        }

        // Remove Student
        $scope.CancelEdit = function () {
            $scope.EditFORM = angular.copy($scope.students);
        }

        // Update Student
        $scope.udpateStudent = function () {
            $scope.students = angular.copy($scope.EditFORM);
        }

        // Add Student
        $scope.addStudent = function (newStudent) {
            $scope.students.push(newStudent);

        }



                }
                ]);